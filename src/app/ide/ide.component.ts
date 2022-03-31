import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from 'ace-builds';
@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IdeComponent implements OnInit {

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @ViewChild("output") private output!: ElementRef<HTMLElement>;
  selectedLanguage: string = "c";

  languages = [
    { name: "C", value: "c" },
    { name: "C++", value: "cpp" },
    { name: "PHP", value: "php" },
    { name: "Python", value: "python" },
    { name: "Node JS", value: "node" }
  ]

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //TODO: CHANGE STYLE
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("#include <stdio.h>\n" +
      "int main() {\n" +
      "   // printf() displays the string inside quotation\n" +
      "   printf(\"Hello, World!\");\n" +
      "   return 0;\n" +
      "}");

    aceEditor.setTheme('ace/theme/monokai');
    aceEditor.session.setMode('ace/mode/c_cpp');
  }

  changeLanguage() {
    const aceEditor = ace.edit(this.editor.nativeElement);

    console.log(this.selectedLanguage)

    if(this.selectedLanguage == 'c' || this.selectedLanguage == 'cpp')
      aceEditor.session.setMode("ace/mode/c_cpp");
    else if(this.selectedLanguage == 'php')
      aceEditor.session.setMode("ace/mode/php");
    else if(this.selectedLanguage == 'python')
      aceEditor.session.setMode("ace/mode/python");
    else if(this.selectedLanguage == 'node')
      aceEditor.session.setMode("ace/mode/javascript");
  }

  executeCode() {
    const aceEditor = ace.edit(this.editor.nativeElement)
    this.output.nativeElement.innerText = aceEditor.session.getValue()
    //TODO: GET OUPUT
  }
}

/*
function executeCode() {

  $.ajax({

    url: "/ide/app/compiler.php",

    method: "POST",

    data: {
      language: $("#languages").val(),
      code: editor.getSession().getValue()
    },

    success: function(response) {
      $(".output").text(response)
    }
  })
}*/
