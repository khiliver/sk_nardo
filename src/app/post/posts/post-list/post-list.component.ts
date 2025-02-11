import { Component, Input } from "@angular/core";

@Component ({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostlistComponent{

    @Input() posts = [
        {title: '1st Title', content: '1st content'},
    ]
}