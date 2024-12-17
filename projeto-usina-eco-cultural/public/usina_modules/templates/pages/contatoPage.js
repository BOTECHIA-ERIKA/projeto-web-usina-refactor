import { URL } from "./../../CONSTANTS/URL.js"

export const ContatoPage = `


<div class="container mb-4">
		<div class="row mt-3 mb-4">
			<div class="col">
				<form action="${URL}/api/contato" class="contact-form">
					<div class="row">
						<div class="col-12 mb-3">
							<label for="senderName" class="form-label">Nome do Cliente</label>
							<input type="text" class="form-control" placeholder="John Doe" id="senderName" name="senderName">
						</div>

						<div class="col-12 mb-3">
							<label for="senderEmail" class="form-label">E-mail do Cliente</label>
							<input type="email" class="form-control" placeholder="john-doe@gmail.com" id="senderEmail" name="senderEmail">
						</div>
					</div>

                    <div class="col-12  mb-3">
									<label class="form-label" for="senderTheme">Assunto</label>
									<select name="senderTheme" id="senderTheme" class="form-select">
										<option value="eventos">Parcerias de Eventos</option>
										<option value="educacao">Parcerias Educativas</option>
										<option value="comunidade">Reuniões com a Comunidade</option>
										<option value="meioAmbiente">Ações do Meio Ambiente</option>
										<option value="cultural">Ações de Cultura</option>
										<option value="outros">Outros</option>
									</select>
					</div>
					
						<div class="col-12 mb-3">
                			<label for="senderMessage" class="form-label">Mensagem </label>
                    		<textarea name="senderMessage" id="senderMessage" class="form-control"></textarea>
						</div>	
                
                    <div class="row">
						<div class="col-12 d-flex justify-content-center">
							<div>
								<button type="submit" class="col-12 btn btn-primary">Enviar</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
`