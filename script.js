function carregar() {
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
       // var hora = data.getHours()
        var hora = 15 // teste para forçar a hora

        msg.innerHTML = `Agora São ${hora} horas.`
        if (hora >=4 && hora < 12) {
          // bom dia
          msg.innerHTML = `Agora São ${hora} horas. Bom Dia!`
          img.src = 'manha250.png'
          document.body.style.background = '#ebdcc2'
        } else if ( hora >=12 && hora <= 18) {
          // boa tarde
          msg.innerHTML = `Agora São ${hora} horas. Boa Tarde!`
          img.src = 'tarde250.png'
          document.body.style.background = '#c6816e' 
        } else {
          // boa noite
          msg.innerHTML = `Agora São ${hora} horas. Boa Noite!`
          img.src = 'noite250.png'
          document.body.style.background = '#0c0618' 
        }

}

