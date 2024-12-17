export const BlogPage = ` 
 <div id="container">
        <div class="row">
          <section class="col-md-8 p-2">
            <header class="header-section">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              Blog Usina Eco-Cultural
            </h3>
            </header>
      
            <article class="blog-post bg-light rounded p-2">
              <small class="text-body-secondary">January 13, 2024</small>
              <hr>
              <div class="blog-post-header pb-4">
                    <h3 class="display-2 link-body-emphasis mb-1">Titulo do Post</h3>
              </div>
              <div class="blog-post-body">
          <figure class="blog-figure">
                <img class="blog-figure-img p-2" src="assets/i001_coletivo.png" alt="imagem para atividades do coletivo" />
                <figcaption>
                  <p class="text-center"><strong>Legenda:</strong> imagem para atividades do coletivo</p>
                </figcaption>
          </figure>

              <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
              </div>
              <div class="container">
                <div class="col">
                  <div class="row">
                    <button type="button" class="btn btn-secondary col-5" >
                      Comentários
                    </button>
                  </div>
                </div>
              </div>
              <hr> 
              <!--FORMULARIO DE COMENTARIO--> 
              </article>
              <!--FORMULARIO COMENTARIO FINAL-->
          </section>
      
          <aside class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
              <div class="p-4 mb-3 bg-body-tertiary rounded">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>
      
              <div>

                <h4 class="fst-italic">Recent posts</h4>
                <ul class="list-unstyled">
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">Example blog post title</h6>
                        <small class="text-body-secondary">January 15, 2024</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">This is another blog post title</h6>
                        <small class="text-body-secondary">January 14, 2024</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                      <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                      
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
      
              <div class="p-4">
                <h4 class="fst-italic">Archives</h4>
                <ol class="list-unstyled mb-0">
                  <li><a href="#">March 2021</a></li>
                  <li><a href="#">February 2021</a></li>
                  <li><a href="#">January 2021</a></li>
                  <li><a href="#">December 2020</a></li>
                  <li><a href="#">November 2020</a></li>
                  <li><a href="#">October 2020</a></li>
                  <li><a href="#">September 2020</a></li>
                  <li><a href="#">August 2020</a></li>
                  <li><a href="#">July 2020</a></li>
                  <li><a href="#">June 2020</a></li>
                  <li><a href="#">May 2020</a></li>
                  <li><a href="#">April 2020</a></li>
                </ol>
              </div>
      
              <div class="p-4">
                <h4 class="fst-italic"> TAGs</h4>
                <ul class="list-unstyled d-flex gap-3 p-3 bg-light">
                  <li><a href="#">
                    <span class="badge text-bg-secondary">New</span>
                  </a></li>
                  <li><a href="#">
                    <span class="badge text-bg-secondary">New</span>
                  </a></li>
                  <li><a href="#">
                    <span class="badge text-bg-secondary">New</span>
                  </a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

`