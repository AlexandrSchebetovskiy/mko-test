import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {IMessage} from "../types/message.interface";
import {ICreateMessageRequest} from "../types/create-message-request.interface";
import {KeyValue} from "@angular/common";

@Injectable()
export class MessageService {
  $count: BehaviorSubject<number> = new BehaviorSubject<number>(1)
  $messages: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([])
  constructor(private http: HttpClient) {

  }

  fetchAll(url: string): Observable<IMessage[]> {
    return  this.http.get<IMessage[]>(environment.baseUrl+ url, {observe: 'response'})
      .pipe(
        map((res) => {
          const count = res.headers.get('X-Total-Count')
          if(count) {
            this.$count.next(+count)
          }
          return res.body as IMessage[]
        })
      )
  }
  getById(id: number): Observable<IMessage> {
    return this.http.get<IMessage>(`${environment.baseUrl}/${id}`)
  }
  create(req: ICreateMessageRequest): Observable<any> {
    return this.http.post(environment.baseUrl, req)
  }
  update(req: ICreateMessageRequest, id: number): Observable<any> {
    return this.http.put(`${environment.baseUrl}/${id}`, req)
  }
  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/${id}`)
  }

  truncate(message: string): string {
    return message.slice(0,100) + '...'
  }
}
