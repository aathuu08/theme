import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();

    getCategory(): Observable<any> {
        return this.subject.asObservable();
    }

    sendCategory(message: string){
        this.subject.next({ text: message });
    }
}
