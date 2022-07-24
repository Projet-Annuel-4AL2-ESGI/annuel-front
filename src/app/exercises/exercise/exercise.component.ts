import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {Code} from "../../../models/Code";
import {CodeService} from "../../../services/CodeService";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExerciseResponseDialogComponent} from "../exercise-response-dialog/exercise-response-dialog.component";
import {ExerciseService} from "../../../services/ExerciseService";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  selectedLanguage: string = "py";
  exercise: any;

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @ViewChild("output") private output!: ElementRef<HTMLElement>;

  constructor(private codeService: CodeService, private activatedRoute: ActivatedRoute, private matDialog: MatDialog,
              private exoService: ExerciseService) {
    this.activatedRoute.data.subscribe(value => {
      this.exercise = value['event']
      this.selectedLanguage = this.exercise.language
    })
  }

  ngOnInit(): void {
    console.log(this.exercise);
  }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    ace.edit(this.editor.nativeElement).setTheme('ace/theme/monokai');

    this.changeLanguage()
  }


  runClicked() {
    const aceEditor = ace.edit(this.editor.nativeElement)
    let code = new Code(this.exercise.language,
      this.exercise.exoResponse + '\n' + aceEditor.session.getValue() + '\n' + this.exercise.exoCheck)
    this.exoService.verifyExo(code).subscribe(
      value => {
        this.openDialog(value);
      },
      error => {
        this.openDialog(error.error.text)
      }
    )
  }

  openDialog(data: string) {
    this.matDialog.open(ExerciseResponseDialogComponent, {
      data: {
        data: data,
        exo: this.exercise,
      }
    });
  }

  setMode(element: ElementRef<HTMLElement>) {
    let aceEditor = ace.edit(element.nativeElement);
    aceEditor.session.setMode("ace/mode/python");
    aceEditor.session.setValue("print ('Hello World!')");
    ace.edit(element.nativeElement).setTheme('ace/theme/monokai');
  }

  changeLanguage() {
    const aceEditor = ace.edit(this.editor.nativeElement);

    if (this.selectedLanguage == 'c' || this.selectedLanguage == 'cpp') {
      aceEditor.session.setMode("ace/mode/c_cpp");
      aceEditor.session.setValue(`#include <stdio.h>\n int main() {\n// printf() displays the string inside quotation\nprintf(\"Hello, World!\");\nreturn 0;\n}`);
      } else if (this.selectedLanguage == 'php') {
      aceEditor.session.setMode("ace/mode/php");
      aceEditor.session.setValue("<?php echo 'Hello World!'; ?> ");
    } else if (this.selectedLanguage == 'py') {
      aceEditor.session.setMode("ace/mode/python");
      aceEditor.session.setValue("print ('Hello World!')");
    } else if (this.selectedLanguage == 'js') {
      aceEditor.session.setMode("ace/mode/javascript");
      aceEditor.session.setValue("console.log('Hello World');");
    }
  }
}
