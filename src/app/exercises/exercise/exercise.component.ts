import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {Code} from "../../../models/Code";
import {CodeService} from "../../../services/CodeService";
import {ActivatedRoute, Data} from "@angular/router";
import {Exercise} from "../../../models/Exercise";
import {CommentDialogComponent} from "../../home/home-center/comment-dialog/comment-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ExerciseResponseDialogComponent} from "../exercise-response-dialog/exercise-response-dialog.component";

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

  constructor(private codeService: CodeService, private activatedRoute: ActivatedRoute, private matDialog: MatDialog) {
    this.activatedRoute.data.subscribe(value => {
      this.exercise = value['event']
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const aceEditor = ace.edit(this.editor.nativeElement);

    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    ace.edit(this.editor.nativeElement).setTheme('ace/theme/monokai');

    aceEditor.session.setMode("ace/mode/python");
    aceEditor.session.setValue("print ('Hello World!')");
  }

  async runClicked() {
    const aceEditor = ace.edit(this.editor.nativeElement)
    console.log()
    await this.codeService.postCode(new Code(this.selectedLanguage, aceEditor.session.getValue())).subscribe(
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
}
