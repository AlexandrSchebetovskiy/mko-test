import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {IMessage} from "../types/message.interface";
import {ICreateMessageRequest} from "../types/create-message-request.interface";

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}

  fetchAll(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(environment.baseUrl)
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
