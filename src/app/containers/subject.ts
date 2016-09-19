import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'subject-container',
    directives: [ ...ROUTER_DIRECTIVES ],
    template: `
       <div>
             <table class="rwd-table subject-table table-striped">
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
    `
})

export class Subject {
    subjects = [
        {subject_name: 'Math++', subject_description: 'Math++'},
        {subject_name: 'Math', subject_description: 'Math'},
        {subject_name: 'Math--', subject_description: 'Math--'},
    ]
}

