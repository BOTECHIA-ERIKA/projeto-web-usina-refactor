import {mapPortfolios} from "../partials/Portfolios.js";

export const EducationPage = (`
    <section class="container-testimonial container mb-4 pb-4">
        <div class="gallery-list rounded-4 py-4">
            <header class="text-light">
                <h4 class="display-2 text-center mt-4 mb-4 bolder"><u>EDUCAÇÃO INSPIRADA</u> <br/> NA  <strong>NOSSA USINA</strong></h4>
                <div class="container p-4 text-light">
<p class="text-center">                    Conheça uma série de projetos inspirados na Usina Vergueiro com o dominio Educativo.
</p>

                </div>
            </header>
            ${mapPortfolios()}
        </div>
    </section>

`);