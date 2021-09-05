import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../_base/services/message.service';
import { UserService } from '../../../_share/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  isLoading = false;
  isSubmit = false;
  redirect = '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
       this.redirect = params.redirect;
    });
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userName: [null],
      passWord: [null]
    });
  }

  login(): void {
    const formData = this.myForm.getRawValue();
    if (formData.passWord !== '6711') {
      this.messageService.notiMessageError('Tài khoản hoặc mật khẩu không chính xác');
      return;
    }
    localStorage.setItem('token', 'xnxx');
    this.userService.currentUser = {
      userName: formData.userName,
      userId: 'dev-007',
      age: 17,
      token: null
    };
    this.messageService.notiMessageSuccess('Đăng nhập thành công');
    this.router.navigate([this.redirect || '/']);
  }
}
