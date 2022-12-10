import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { ApiService } from "../../core/service/api.service";
import { PageData } from "../model/page-data";
import { User } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  baseUrl: string = environment.apiUrl + 'users'

  getListUser(size: number, page: number): Promise<PageData<User>> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams()
      params = params.set('page', page)
      params = params.set('per_page', size)
      this.apiService.get(this.baseUrl, null, params).subscribe((value: any) => {
        resolve(value)
      },
        error => {
          reject(error)
        })
    })
  }

  createUser(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl, null).subscribe((value: any) => {
        resolve(value)
      },
        error => {
          reject(error)
        })
    })
  }

}
