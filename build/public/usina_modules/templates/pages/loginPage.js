const BASE_URL = "http://localhost:9494/";

export const LoginPage = `
              <section class="section-login" id="contentId">
          <div class="row">
            <div class="col-12 col-md-6">
            <div class="form-container-login">
            <div class="form-content p-4">
    <form class="form-content" method="POST" action="${BASE_URL}api/signIn">            <div class="form-group mt- mb-4">
        <label for="usernameLogin mb-4">
          Nome do Usuário
         </label>
        <input class="mt-4 form-control rounded" id="usernameLogin" name="usernameLogin" type="text"/>
      
      </div>
      
           <div class="form-group mt-2 mb-2">
        <label for="usernamePassword mb-4">
          Senha do Usuário
         </label>
        <input class="mt-4 form-control rounded" id="usernamePassword" name="usernamePassword" type="password"/>
      
      </div>
      <div class="form-group mt-4">
        <button class="btn btn-success" type="submit">LOGAR</button>
        </div>
      </form>
              
              </div>
              
              
            </div>  
            </div>
            <div class="col-0 col-md-6">
              <img src="https://i.postimg.cc/0NJwCzys/imgLogin.png" alt=
"img do login" class="img-login">
            
            </div>
            
            
            </div>
          
          
          </section>


`

export default LoginPage;