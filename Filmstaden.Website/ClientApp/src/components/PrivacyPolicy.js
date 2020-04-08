import React, { Component } from 'react';
import '../custom.css'

export class PrivacyPolicy extends Component {
  static displayName = PrivacyPolicy.name;

  render () {
    return (
      <div>
        <h1>Personuppgiftspolicy</h1>
        <p>Allmänt</p>
        <p>För oss är våra kunders förtroende av allra största vikt.
        Vi vet att det förtroendet bland annat bygger på hur vi hanterar den information vi samlar in om dig som kund och vår förmåga att skydda din integritet.
        Vi utför all insamling och behandling av personuppgifter i enlighet med gällande integritetsskyddslagstiftning.
        Vi strävar alltid efter att minimera de uppgifter vi behandlar och vi säljer aldrig dina personuppgifter till andra företag. 
        Syftet med denna personuppgiftspolicy är att på ett så tydligt och transparent sätt som möjligt beskriva hur vi samlar in och använder personuppgifter och vad du som kund har rätt att begära av oss när det gäller den hanteringen.</p>
        <div class="links">
          <a href="#">Dina rättigheter</a>
          <a href="#">Personuppgiftsansvarig</a>
          <a href="#">Vad är en personuppgift?</a>
          <a href="#">Vilka personuppgifter samlar vi in om dig och för vilket ändamål?</a>
          <a href="#">Cookies</a>
          <a href="#">Vem behandlar utlämning av personuppgifter?</a>
          <a href="#">Utlämning av personuppgifter till tredje land</a>
          <a href="#">Lagringstid</a>
          <a href="#">Ändringar i personuppgiftspolicyn</a>
        </div>
        <p>Denna personuppgiftspolicy kan komma att uppdateras från tid till annan. Den senaste versionen hittar du alltid på denna sida.
        Vid uppdateringar som är av avgörande betydelse för hur vi hanterar dina personuppgifter (t.ex. ändring av angivna ändamål för behandlingen) och som kan vara av avgörande betydelse för dig, kommer vi i de fall du är medlem i vårt lojalitetsprogram att meddela dig via e-post.</p>
      </div>
    );
  }
}

