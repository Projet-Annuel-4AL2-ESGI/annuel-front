import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {Code} from "../../../models/Code";
import {CodeService} from "../../../services/CodeService";
import {ExerciseResponseDialogComponent} from "../exercise-response-dialog/exercise-response-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {Exercise} from "../../../models/Exercise";

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent implements OnInit {

  constructor(private codeService: CodeService, private matDialog: MatDialog, private _ngZone: NgZone, private router: Router) { }

  @ViewChild("editor1") private editor1!: ElementRef<HTMLElement>;
  @ViewChild("editor2") private editor2!: ElementRef<HTMLElement>;
  @ViewChild("editor3") private editor3!: ElementRef<HTMLElement>;
  @ViewChild('autosize') private autosize!: CdkTextareaAutosize;

  selectedLanguage: string = "py";
  languages = [
    //{ name: "C", value: "c" },
    //{ name: "C++", value: "cpp" },
    //{ name: "PHP", value: "php" },
    {name: "Python", value: "py"},
    {name: "JS", value: "js"}
  ]
  rules: string = "";
  title: string = "";

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    ace.config.set("fontSize", "10px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    this.setMode(this.editor1)
    this.setMode(this.editor2)
    this.setMode(this.editor3)
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setMode(element: ElementRef<HTMLElement>) {
    let aceEditor = ace.edit(element.nativeElement);
    aceEditor.session.setMode("ace/mode/python");
    aceEditor.session.setValue("print ('Hello World!')");
    ace.edit(element.nativeElement).setTheme('ace/theme/monokai');
  }

  changeLanguage(event: any) {
    const aceEditor1 = ace.edit(this.editor1.nativeElement);
    const aceEditor2 = ace.edit(this.editor2.nativeElement);
    const aceEditor3 = ace.edit(this.editor3.nativeElement);

    this.selectedLanguage = event;
    console.log(this.selectedLanguage)

    if (this.selectedLanguage == 'c' || this.selectedLanguage == 'cpp') {
      aceEditor1.session.setMode("ace/mode/c_cpp");
      aceEditor1.session.setValue(`#include <stdio.h>\n int main() {\n// printf() displays the string inside quotation\nprintf(\"Hello, World!\");\nreturn 0;\n}`);
      aceEditor2.session.setMode("ace/mode/c_cpp");
      aceEditor2.session.setValue(`#include <stdio.h>\n int main() {\n// printf() displays the string inside quotation\nprintf(\"Hello, World!\");\nreturn 0;\n}`);
      aceEditor3.session.setMode("ace/mode/c_cpp");
      aceEditor3.session.setValue(`#include <stdio.h>\n int main() {\n// printf() displays the string inside quotation\nprintf(\"Hello, World!\");\nreturn 0;\n}`);
    } else if (this.selectedLanguage == 'php') {
      aceEditor1.session.setMode("ace/mode/php");
      aceEditor1.session.setValue("<?php echo 'Hello World!'; ?> ");
      aceEditor2.session.setMode("ace/mode/php");
      aceEditor2.session.setValue("<?php echo 'Hello World!'; ?> ");
      aceEditor3.session.setMode("ace/mode/php");
      aceEditor3.session.setValue("<?php echo 'Hello World!'; ?> ");
    } else if (this.selectedLanguage == 'py') {
      aceEditor1.session.setMode("ace/mode/python");
      aceEditor1.session.setValue("print ('Hello World!')");
      aceEditor2.session.setMode("ace/mode/python");
      aceEditor2.session.setValue("print ('Hello World!')");
      aceEditor3.session.setMode("ace/mode/python");
      aceEditor3.session.setValue("print ('Hello World!')");
    } else if (this.selectedLanguage == 'js') {
      aceEditor1.session.setMode("ace/mode/javascript");
      aceEditor1.session.setValue("console.log('Hello World');");
      aceEditor2.session.setMode("ace/mode/javascript");
      aceEditor2.session.setValue("console.log('Hello World');");
      aceEditor3.session.setMode("ace/mode/javascript");
      aceEditor3.session.setValue("console.log('Hello World');");
    }
  }

  async runClicked() {
    const aceEditor1 = ace.edit(this.editor1.nativeElement)
    const aceEditor2 = ace.edit(this.editor2.nativeElement)
    const aceEditor3 = ace.edit(this.editor3.nativeElement)

    await this.codeService.postCode(new Code(this.selectedLanguage, aceEditor1.session.getValue() + '\n' + aceEditor3.session.getValue() + '\n' + aceEditor2.session.getValue())).subscribe(
      value => {
        this.matDialog.open(ExerciseResponseDialogComponent, {
          height: '500px',
          width: '600px',
          data: {
            data: value
          }
        });
      },
      error => {
        this.matDialog.open(ExerciseResponseDialogComponent, {
          height: '500px',
          width: '600px',
          data: {
            data: error.error.text
          }
        });
      }
    )
  }

  saveClicked() {
    const firstEditorValue = ace.edit(this.editor1.nativeElement).session.getValue()
    const secondEditorValue = ace.edit(this.editor2.nativeElement).session.getValue()
    this.router.navigate(['/exercise-create/preview'], {
      state: {
        data: {
          "exercise-created": new Exercise(null, this.title, this.rules, "", firstEditorValue, secondEditorValue, this.selectedLanguage)
        }
      }
    });
  }
}
