import './styles.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Ciclo Salta, inicio">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 42 42" role="img">
          <path d="M21 4c7.8 0 14 6.2 14 14 0 9.8-8.9 16.4-14 20-5.1-3.6-14-10.2-14-20C7 10.2 13.2 4 21 4Z" fill="currentColor" opacity=".14"/>
          <path d="M20.8 31.5c-.2-8.2 2.5-14.3 8.1-18.1M20.4 27c-3.7-2-6-5.2-7-9.7M21 22.6c2.1-.2 4.2-1 6.1-2.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </span>
      <span>Ciclo Salta</span>
    </a>

    <nav class="site-nav" aria-label="Navegación principal">
      <a href="#como-funciona">Cómo funciona</a>
      <a href="#servicio">El servicio</a>
      <a class="nav-cta" href="#sumate">Quiero sumarme</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow">Separación domiciliaria · Compostaje local</p>
        <h1>Separá tus residuos orgánicos. Nosotros hacemos el resto.</h1>
        <p class="hero-lead">
          Un servicio simple para transformar los residuos orgánicos de tu hogar en compost, sin cambiar tu rutina.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#sumate">Quiero participar</a>
          <a class="text-link" href="#como-funciona">Ver cómo funciona <span aria-hidden="true">↓</span></a>
        </div>
        <p class="pilot-note">Proyecto piloto · Cupos limitados · Cobertura inicial reducida</p>
      </div>

      <div class="hero-visual" aria-label="Separación domiciliaria de residuos orgánicos">
        <div class="visual-backdrop"></div>
        <div class="kitchen-card">
          <div class="card-topline">
            <span>En casa</span>
            <span class="status-dot">Separado</span>
          </div>
          <div class="counter-scene">
            <div class="cutting-board">
              <span class="peel peel-one"></span>
              <span class="peel peel-two"></span>
              <span class="leaf leaf-one"></span>
              <span class="leaf leaf-two"></span>
              <span class="eggshell shell-one"></span>
              <span class="eggshell shell-two"></span>
            </div>
            <div class="bucket">
              <div class="bucket-lid"></div>
              <div class="bucket-body">
                <span class="bucket-label">ORGÁNICOS</span>
                <svg class="bucket-icon" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M25 38c-2-10 1-18 10-24M24 32c-6-2-10-7-11-14M25 26c4 0 7-1 10-4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="bucket-handle"></div>
            </div>
          </div>
          <div class="card-caption">
            <span class="caption-number">01</span>
            <p>Separás los residuos orgánicos en un recipiente limpio y cerrado.</p>
          </div>
        </div>
        <div class="soil-swatch" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </section>

    <section class="intro" id="como-funciona">
      <div class="section-kicker">Un circuito simple</div>
      <div class="intro-heading">
        <h2>De tu cocina a la tierra, con un sistema ordenado.</h2>
        <p>Retiramos, procesamos y devolvemos valor a un material que normalmente termina mezclado con la basura.</p>
      </div>
      <div class="steps">
        <article>
          <span>01</span>
          <h3>Separás</h3>
          <p>Guardás los residuos orgánicos indicados en el recipiente del servicio.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Retiramos</h3>
          <p>Pasamos por tu domicilio según el cronograma acordado.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Compostamos</h3>
          <p>Los procesamos localmente bajo condiciones controladas.</p>
        </article>
      </div>
    </section>

    <section class="service" id="servicio">
      <div>
        <p class="section-kicker">Servicio domiciliario</p>
        <h2>Menos residuos mezclados. Más materia que vuelve al suelo.</h2>
      </div>
      <div class="service-grid">
        <article>
          <strong>Local</strong>
          <p>Operación cercana, pensada para una cobertura inicial acotada en Salta.</p>
        </article>
        <article>
          <strong>Limpio</strong>
          <p>Recipientes cerrados, pautas claras y una rutina sencilla para cada hogar.</p>
        </article>
        <article>
          <strong>Trazable</strong>
          <p>Un circuito concreto: separación, retiro, procesamiento y aprovechamiento.</p>
        </article>
      </div>
    </section>

    <section class="signup" id="sumate">
      <p class="section-kicker">Cupos piloto</p>
      <h2>¿Querés separar tus orgánicos en casa?</h2>
      <p>Dejanos tus datos y te contamos si tu zona está dentro de la cobertura inicial.</p>
      <a class="button button-primary" href="mailto:hola@ciclosalta.com?subject=Quiero%20participar%20del%20piloto">Quiero participar</a>
    </section>
  </main>

  <footer>
    <span>Ciclo Salta</span>
    <span>Salta, Argentina</span>
  </footer>
`
