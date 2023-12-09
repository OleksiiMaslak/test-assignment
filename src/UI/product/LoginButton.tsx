'use client'

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


const LoginButton = () => {
    const router = useRouter();

    const clickHandler = () => {

        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email !== "" && password !== "") {


            if (password !== ''){
                if (email.endsWith("@mail.ch")) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Отказано в доступе',
                        text: 'Пожалуйста, введите корректный адрес электронной почты',
                      });
                } else {
                    document.cookie = `auth=true;`

                                        
                    router.push('/listOfProducts');   
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Отказано в доступе',
                    text: 'Пожалуйста, введите пароль',
                  });
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Отказано в доступе',
                text: 'Пожалуйста, введите адрес электронной почты и пароль',
              });
        }     
    }

  return (
      <button type="button" className="login-button" onClick={clickHandler}>
          <div className="login-link" >
              Войти
          </div>
      </button>
  );
}

export default LoginButton