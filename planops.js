/* Envoi des leads du site vers le CRM PlanOps de Toitex.
   Doc : https://app.planops.net/view/leads_guide/f8f9d25d-f9d3-4681-900b-f23b5a605cb3
   Requis par PlanOps : name, email, phone. Tous les autres champs s'affichent
   dans « Champs remplis » sur la fiche client.
   Usage : sendToPlanOps(objetDuFormulaire) → Promise (ne rejette jamais). */
(function () {
  var PLANOPS_URL = 'https://api.planops.net/webhooks/tenants/f8f9d25d-f9d3-4681-900b-f23b5a605cb3/leads';
  var SKIP = { 'bot-field': 1, 'form-name': 1, 'nom_complet': 1, 'tel': 1, 'adresse': 1 };

  window.sendToPlanOps = function (data) {
    try {
      data = data || {};
      var payload = {
        name: (data.nom_complet || data.name || '').trim(),
        email: (data.email || '').trim(),
        phone: (data.tel || data.phone || '').trim()
      };
      var addr = [data.adresse, data.ville].filter(function (v) { return v && String(v).trim(); }).join(', ');
      if (addr) payload.billingAddress = addr;

      Object.keys(data).forEach(function (k) {
        var v = data[k];
        if (SKIP[k] || k in payload || v == null || String(v).trim() === '') return;
        payload[k] = typeof v === 'string' ? v.trim() : v;
      });
      if (!payload.page_url) payload.page_url = location.href;
      if (!payload.date) payload.date = new Date().toISOString();

      return fetch(PLANOPS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).then(function (r) {
        if (!r.ok) console.warn('PlanOps:', r.status);
        return r;
      }).catch(function (err) {
        console.warn('PlanOps erreur:', err);
      });
    } catch (err) {
      console.warn('PlanOps erreur:', err);
      return Promise.resolve();
    }
  };
})();
