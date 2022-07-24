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
  }

  ngAfterViewInit(): void {
    const aceEditor = ace.edit(this.editor.nativeElement);

    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    ace.edit(this.editor.nativeElement).setTheme('ace/theme/monokai');

    aceEditor.session.setMode("ace/mode/python");
    aceEditor.session.setValue("print ('Hello World!')");
  }


  runClicked() {
    const aceEditor = ace.edit(this.editor.nativeElement)
    let code = new Code(this.selectedLanguage,
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
}
