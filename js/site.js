// Uma função que é chamada quando o DOM é caregado
function chama() {
  var nomeBanco = document.getElementById('nomeBanco');
  var numeRecibo = document.getElementById('numeroRecibo');
  var nomeBene = document.getElementById('nomeBeneficiario');
  var razao = document.getElementById('razao');    
  var cpfBene = document.getElementById('cpfBeneficiario');
  var pagador = document.getElementById('pagador');
  var cpfPagador = document.getElementById('cpfPagador');
  var datV = document.getElementById('dataVencimento');
  var datP = document.getElementById('dataPagamento');
  var valor = document.getElementById('valor');
  var desconto = document.getElementById('desconto');
  var abatimento= document.getElementById('abatimento');
  var bonificacao = document.getElementById('bonificacao');
  var multa = document.getElementById('multa');
  var juros = document.getElementById('juros');
  var valorTotal = document.getElementById('valorTotal');
  var descricao = document.getElementById('descricao');
  
  
  if(nomeBanco.value && numeRecibo.value && nomeBene.value && cpfBene.value && pagador.value && cpfPagador.value && datV.value
    && datP.value && valor.value && abatimento.value && bonificacao.value && juros.value && valorTotal.value != ""){
      pega();
    }
    
  }
  
  // Função que pega o valor dos inputs
  function pega() {
    var nomeBanco = document.getElementById('nomeBanco').value;
    var numeRecibo = document.getElementById('numeroRecibo').value;
    var nomeBene = document.getElementById('nomeBeneficiario').value;
    var razao = document.getElementById('razao').value;
    var cpfBene = document.getElementById('cpfBeneficiario').value;
    var pagador = document.getElementById('pagador').value;
    var cpfPagador = document.getElementById('cpfPagador').value;
    var datV = document.getElementById('dataVencimento').value;
    var datP = document.getElementById('dataPagamento').value;
    var valor = document.getElementById('valor').value;
    var desconto = document.getElementById('desconto').value;
    var abatimento= document.getElementById('abatimento').value;
    var bonificacao = document.getElementById('bonificacao').value;
    var multa = document.getElementById('multa').value;
    var juros = document.getElementById('juros').value;
    var valorTotal = document.getElementById('valorTotal').value;
    var descricao = document.getElementById('descricao').value;
    
    
    // Função que cria o PDF
    var pdf = new jsPDF();
    
    pdf.setProperties({
      title: 'Gerador de Recibos',
      subject: 'Recibo ' + numeRecibo,
      author: '-------------',
      keywords: 'gerador de recibos',
      creator: 'gPDF, javascript, web 2.0, ajax'
    });
    
    
    pdf.setFontSize(12);
    pdf.text(75, 20, "Comprovante de Pagamento");
    pdf.text(85, 25, "Boleto de Cobrança");
    
    
    pdf.setFontSize(18); //Tamanho da fonte
    pdf.setTextColor(150); // cor da fonte cinza claro
    pdf.text(92, 35, "n° "+numeRecibo);
    
    pdf.setTextColor(0); // cor da fonte preto
    pdf.setFont("helvetica");
    pdf.setFontSize(10);
    pdf.text(35, 45, "Beneficiário: "+nomeBene);
    pdf.text(35, 50, "CPF/CNPJ: "+cpfBene);
    pdf.text(35, 55, "Razão social: "+razao)
    pdf.text(35, 60, 'Banco: '+nomeBanco);
    pdf.text(35, 65, "________________________________________________________________________");
    
    pdf.text(35, 70, 'Pagador: '+pagador);
    pdf.text(35, 75, "CPF/CNPJ: "+cpfPagador);
    
    
    pdf.text(35, 80, "________________________________________________________________________");
    
    pdf.text(35, 85, 'Data de emissão: '+datP);
    pdf.text(110, 85, 'Data de validade: '+datV);
    pdf.text(35, 90, "________________________________________________________________________");
    
    pdf.text(35, 95, "Valor: "+valor+ "R$");
    pdf.text(110, 95, "Desconto:"+desconto+ "R$");
    pdf.text(35, 100, "Abatimento:"+abatimento+ "R$");
    pdf.text(110, 100, "Bonificação:"+bonificacao+ "R$");
    pdf.text(35, 105, "Juros:"+juros+ "R$");
    pdf.text(110, 105, "Multa:"+multa+ "R$");
    pdf.text(35, 110, "________________________________________________________________________");
    
    pdf.setFontSize(12);
    pdf.text(87, 120, "Valor total: "+valorTotal+"R$");
    
    pdf.setFontSize(10);
    pdf.text(35, 125, "________________________________________________________________________");
    
    pdf.text(35, 130, "Descrição: "+descricao );
    
    pdf.setFontSize(8);
    pdf.text(75, 135, "Banco Central do Brasil estabelece o prazo de");
    pdf.text(70, 140, "3 dias úteis para compensar o boleto de pagamento.");
    
    
    // pdf.save('recibo_'+numeRecibo+'_'+pagador+'.pdf');
    
    window.open(pdf.output('bloburl')) 
    
  }