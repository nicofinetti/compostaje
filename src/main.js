import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';
import { projectConfig } from './config.js';

const { projectName, whatsappNumber, email, pilotZone, social } = projectConfig;

function applyConfigToDom() {
  document.title = `${projectName} · Proyecto piloto de residuos orgánicos en Salta Capital`;

  document.querySelectorAll('[data-project-name]').forEach((el) => {
    el.textContent = projectName;
  });

  document.querySelectorAll('[data-pilot-zone]').forEach((el) => {
    el.textContent = pilotZone;
  });

  document.querySelectorAll('[data-email]').forEach((el) => {
    el.textContent = email;
    if (el.tagName === 'A') {
      el.setAttribute('href', `mailto:${email}`);
    }
  });

  document.querySelectorAll('[data-whatsapp-direct]').forEach((el) => {
    const message = encodeURIComponent(
      `Hola, quiero recibir información sobre el proyecto piloto ${projectName}.`,
    );
    // PLACEHOLDER: whatsappNumber se define en src/config.js — reemplazar antes de publicar.
    el.setAttribute('href', `https://wa.me/${whatsappNumber}?text=${message}`);
  });

  const ig = document.querySelector('[data-social-instagram]');
  if (ig) {
    ig.setAttribute('href', social.instagram);
    if (social.instagram === '#') {
      ig.setAttribute('aria-disabled', 'true');
    }
  }

  const fb = document.querySelector('[data-social-facebook]');
  if (fb) {
    fb.setAttribute('href', social.facebook);
    if (social.facebook === '#') {
      fb.setAttribute('aria-disabled', 'true');
    }
  }
}

function initHeader() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-nav-panel]');

  if (!header || !toggle || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => {
    setOpen(!panel.classList.contains('is-open'));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  );

  items.forEach((el) => observer.observe(el));
}

function setFieldError(input, messageEl, message) {
  if (message) {
    input.classList.add('form__input--error');
    input.setAttribute('aria-invalid', 'true');
    messageEl.textContent = message;
  } else {
    input.classList.remove('form__input--error');
    input.removeAttribute('aria-invalid');
    messageEl.textContent = '';
  }
}

function initInterestForm() {
  const form = document.querySelector('[data-interest-form]');
  if (!form) return;

  const fields = {
    name: form.querySelector('#nombre'),
    zone: form.querySelector('#zona'),
    whatsapp: form.querySelector('#whatsapp'),
    comment: form.querySelector('#comentario'),
  };

  const errors = {
    name: form.querySelector('#error-nombre'),
    zone: form.querySelector('#error-zona'),
    whatsapp: form.querySelector('#error-whatsapp'),
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = fields.name.value.trim();
    const zone = fields.zone.value.trim();
    const whatsapp = fields.whatsapp.value.trim();
    const comment = fields.comment.value.trim();

    let valid = true;

    if (!name) {
      setFieldError(fields.name, errors.name, 'Ingresá tu nombre.');
      valid = false;
    } else {
      setFieldError(fields.name, errors.name, '');
    }

    if (!zone) {
      setFieldError(fields.zone, errors.zone, 'Ingresá tu barrio o zona.');
      valid = false;
    } else {
      setFieldError(fields.zone, errors.zone, '');
    }

    if (!whatsapp) {
      setFieldError(fields.whatsapp, errors.whatsapp, 'Ingresá tu número de WhatsApp.');
      valid = false;
    } else {
      setFieldError(fields.whatsapp, errors.whatsapp, '');
    }

    if (!valid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    const lines = [
      `Hola, quiero recibir información sobre el proyecto piloto ${projectName}.`,
      '',
      `Nombre: ${name}`,
      `Barrio o zona: ${zone}`,
      `Contacto: ${whatsapp}`,
      `Comentario: ${comment || '—'}`,
    ];

    const text = encodeURIComponent(lines.join('\n'));

    /**
     * PLACEHOLDER: número de WhatsApp del proyecto.
     * Definido en src/config.js → projectConfig.whatsappNumber
     * Valor temporal: 5490000000000 — REEMPLAZAR antes de publicar.
     */
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

applyConfigToDom();
initHeader();
initReveal();
initInterestForm();
