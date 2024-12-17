export const TimelinePage = `
<style>
.timesContainer{
 padding-top: 50px;
 margin-bottom: 50px;
 border-radius: 22px;
 padding: 50px 1rem;
 background: var(--color-orangeDark);
}
/* Set a background color */
.containerTime {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline2 (the vertical ruler) */
.timeline22 {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline2 (the vertical ruler) */
.timeline22::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: orangered;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -5px;
}

/* ContainerTime around content */
.containerTime{
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline2 */
.containerTime::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 40px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the containerTime to the left */
.left {
  left: 0;
}

/* Place the containerTime to the right */
.right {
  left: 50%;
}

/* Add arrows to the left containerTime (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 42px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right containerTime (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containerTimes on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline2 on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline22::after {
    left: 31px;
  }

/* Full-width containerTime */
  .containerTime {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .containerTime::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containerTimes behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
<div class="container bg-light text-center">
<header class="row p-4 mb-4 mt-4">
<h2 class="display-3">USINA NO TEMPO</h2> 
</header>
</div>
<div class="timesContainer">
<div class="timeline22">
<div class="line">

  <div class="containerTime left">
    <div class="content">
    <h2>1968: Inauguração</h2>
    <div class="d-flex">
    <div class="col-8">
      <p>O incinerador Vergueiro, localizado no Ipiranga,  <strong>	INICIA SUAS ATIVIDADES</strong> com sua atividade de <strong>INCINERADOR DE LIXO DOMÉSTICO</strong></p>
    </div>
    <div class="col-4">
    <img class="img-fluid" src="./../../../assets/svg/svg007_timeline001.svg" alt="img do ano de ">
    </div></div></div>
  </div>
  <div class="containerTime right">
        <div class="content">
    <h2>1977: LIXO HOSPITALAR</h2>
    <div class="d-flex">
    <div class="col-8">
      <p>No ano de 1977, a atividade incineradora se amplia, e <strong>	AGREGA-SE A QUEIMA DE LIXO HOSPITALAR</strong></p>
    </div>
    <div class="col-4">
    <img class="img-fluid" src="./../../../assets/svg/svg008_timeline002.svg" alt="img do ano de ">
    </div></div></div>
  </div>
   <div class="containerTime left">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>

 <div class="containerTime right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
   <div class="containerTime left">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
   <div class="containerTime right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
   <div class="containerTime left">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div></div>
</div>
`