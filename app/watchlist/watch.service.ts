import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Movie } from './movie';

@Injectable()
export class WatchService {
    constructor(private _http: Http) { }
    // http://www.omdbapi.com/?s=$' + title + '&r=json'
    searchWatchData(title: string){
        return this._http.get('http://www.omdbapi.com/?s=$' + title + '&r=json')
            .map(res => res.json());
    }
}
