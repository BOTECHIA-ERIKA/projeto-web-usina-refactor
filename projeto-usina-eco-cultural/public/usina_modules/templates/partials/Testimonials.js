const mapTestimonialsList = () => {
    const testimonials = [{
            author: "Maria Alice",
            imgUrl: "https://i.postimg.cc/vZbgVFfD/avatar1.avif",
            about: "Mãe, trabalhadora e Moradora do Ipiranga",
            testimonial: "Gosto muito de vir a Usina Eco-Cultural para trazer meus 2 filhos para brincar, as atividades são sempre muito educativas e ensinam muito sobre o meio-ambiente e conviver em sociedade"
        },
        {
            author: "Fer da Galera",
            imgUrl: "https://i.postimg.cc/qRjQ9xrx/avatar-skater.jpg",
            about: "22 anos, trans, da galera do Skate",
            testimonial: "Aqui eu me encontro com a minha galera, me sinto livre e ademas adoramos andar na parte da usina que era o pátio da fabrica Arno, a iniciativa eco-cultural sempre nos da espaço para participar dos eventos junto com eles"
        },
        {
            author: "João Silva",
            imgUrl: "https://i.postimg.cc/zBgXQ0K9/grandfather-avatar.png",
            about: "Avô, aposentado e Morador do Sacomã",
            testimonial: "Nos anos 90, fui morador do Ipiranga, agora moro aqui perto no sacomã, gosto de reviver a história do meu passado contando histórias a meus netos, isso é trago eles na Usina para ensinar e reviver"
        }
    ];
    return testimonials.map((testimonial) => (
        `
      <div class="col-md-4">
        <div class="card p-3 text-center px-4">
          <div class="user-image">
            <img src="${testimonial.imgUrl}" class="rounded-circle" width="80">
          </div>
          <div class="user-content">
            <h5 class="mb-0">${testimonial.author}</h5>
            <span>${testimonial.about}</span>
            <p>${testimonial.testimonial}</p>
          </div>      
        </div>
      </div>
      `
    )).join('');
};

const Testimonials = `<ul class="row g-2"> ${mapTestimonialsList()}
    </ul>`;

export default Testimonials;