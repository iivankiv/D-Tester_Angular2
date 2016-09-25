import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SubjectService } from "../services";
import { ISubject } from "../interfaces";

@Component({
    selector: 'subject-container',
    directives: [ ...ROUTER_DIRECTIVES ],
    styles: [`
       .subject-header {
            background-color: deepskyblue;
            padding: 5px;
            height: 50px;
            color: white;
            margin-top: 10px;
        }
        .subject-table {
            background: lightskyblue;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            color: white;
            font-weight: bold;
            width: 100%
        }
        .subject-table td, th {
            padding: 5px;
        }
    `],
    template: `
        <div>
            <section class="wrapper">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class='col-sm-4 col-xs-12 subject-header'><h4>Предмети</h4></div>
                        <div class='col-sm-8 col-xs-12 subject-header'>
                            <button type="button" class="btn btn-success add-btn pull-right" title="Додати предмет">
                                    <i class="glyphicon glyphicon-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <table class="rwd-table subject-table table-responsive table-bordered">
                            <thead>
                                <tr>
                                    <th>Предмет</th>
                                    <th>Опис предмету</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let subject of subjects">
                                    <td data-th="Предмет">{{ subject.subject_name }}</td>
                                    <td data-th="Опис предмету"> {{ subject.subject_description }} </td>
                                    <td>
                                        <button type="button"
                                                class="btn btn-danger views-remove-btn pull-right table-help-btns"
                                                (click)="deleteSubject(subject.subject_id)"
                                                title="Видалити" >
                                                <i class="glyphicon glyphicon-trash"></i>
                                        </button>
                                        <button type="button"
                                                class="btn btn-warning pull-right table-help-btns"
                                                title="Редагувати">
                                                <i class="glyphicon glyphicon-pencil"></i>
                                        </button>
                                        <button type="button"
                                                class="btn btn-info pull-right table-help-btns"
                                                title="Розклад">
                                                <i class="glyphicon glyphicon-calendar" aria-hidden="true"></i>
                                        </button>
                                        <button type="button"
                                                class="btn btn-primary pull-right table-help-btns"
                                                title="Тести">
                                                <i class="glyphicon glyphicon-list-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>   
        </div>
    `
})

export class Subject {
    subjects: any = [];

    getSubjectURL: string = '/subject/getRecords';
    delSubjectURL: string = '/subject/del/';

    constructor(private subjectService: SubjectService) {
        this.getSubject();
    }

    deleteSubject(id: any) {
        this.subjectService.deleteSubject(this.delSubjectURL, id)
            .subscribe( () => this.getSubject())
    }

    getSubject() {
        this.subjectService.getSubjects(this.getSubjectURL)
            .subscribe((res: any) => this.subjects = res)
    }

}

