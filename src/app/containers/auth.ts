import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'auth-container',
    styles: [`
    .login-wrapper {
        background: url(img/enter-bg.jpg) no-repeat center center fixed;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .main {
        height: 100%;
        width: 100%;
        display: table;
    }
    .login-pass-inputs-wrapper {
        display: table-cell;
        height: 100%;
        vertical-align: middle;
	}
	.login-pass-inputs-wrapper:first-child {
		margin-bottom: 20px;
	}
	input {
		display: block;
		margin: auto;
		height: 40px;
		width: 250px;
		padding-left: 10px;
    }
    input&:focus{
        box-shadow: 2px 2px 3px #fff, 1px 1px 2em #fff;
    }
    .enter-submit {
		margin: auto;
		display: block;
		width: 150px;
		margin-top: 20px;
		border-radius: 20px;
		height: 35px;
		color: $white;
		background: rgba(0,0,0,0.6);
		font-weight: bold;
		border: none;
	}
	.enter-submit:hover {
		box-shadow: 0 0 10px 10px rgba(255,255, 255, 0.5), 0 0 20px 5px rgba(255, 255, 255, 0.5);
	}
    .welcome-to-d-tester{
        font-family: 'Marck Script', cursive;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: $black;
        margin-bottom: 50px;
        text-shadow: 1px 1px 2px $white, 0 0 1em $white;
        -moz-text-shadow: 1px 1px 2px $white, 0 0 1em $white;
    }
    `],
    template: `
        <div class="login-wrapper">
            <section class="main">
                <section  class="login-pass-inputs-wrapper">
                    <h1 class="welcome-to-d-tester">Автоматизована система <br> тестування студентів</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Логін"
                            name="username"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            required
                        />
                        <input
                            type="submit"
                            class="enter-submit"
                            value="Вхід"
                        />
                    </form><!-- form -->
                </section><!-- content -->
            </section><!-- container -->
        </div>
    `
})
export class Auth {}