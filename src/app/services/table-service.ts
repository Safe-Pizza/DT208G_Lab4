import { inject, Injectable, Signal } from '@angular/core';
import { Course } from '../interfaces/course';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
    private apiUrl = 'https://webbutveckling.miun.se/files/ramschema.json';

  http = inject(HttpClient);

  getCourses(): Signal<Course[]> {
    const courses$ = this.http.get<Course[]>(this.apiUrl);
    return toSignal(courses$, { initialValue: [] });
    };
}
