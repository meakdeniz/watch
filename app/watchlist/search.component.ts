import { Component, OnInit } from '@angular/core';
import {WatchService} from './watch.service';

@Component({
    moduleId: module.id,
    selector: 'watch-search',
    template: `
                <div class="input-group"  style="width: 75%;">
                    <input type="text" id="movie" (input)="searchMovies(keyword.value)" required #keyword
                    class="form-control" placeholder="Search for..." >
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-success">Add Movie</button>
                    </span>
                </div>
            <span class="label label-info">film found:</span>
            <div *ngIf="results">
              <ul>
                <li *ngFor="let result of results">{{result.Title}}</li>
              </ul>
            </div>
    `
})
export class WatchSearchComponent implements OnInit {
    private results: Array<any>;
    constructor(private _watchService: WatchService) {}
    searchMovies(title: string) {
            this._watchService.searchWatchData(title)
           .subscribe(
              data => {
                console.log(data);
                this.results = data.Search;
              }
            );
        }
    ngOnInit() {

     }
     onSubmit() {

     }
}
