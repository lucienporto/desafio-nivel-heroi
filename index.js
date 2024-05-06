let nomeHeroi = "Epaminondas"
let xpHeroi = 500
let eloHeroi

while (xpHeroi <= 11000) 
{
    if (xpHeroi <= 1000) {
        eloHeroi = "Ferro"
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        eloHeroi = "Bronze"
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        eloHeroi = "Prata"
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        eloHeroi = "Ouro"
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        eloHeroi = "Platina"
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        eloHeroi = "Ascendente"
    } else if (xpHeroi >= 9001 && xpHeroi <= 1000) {
        eloHeroi = "Imortal"
    } else if (xpHeroi >= 10001) {
        eloHeroi = "Radiante"
    }
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + eloHeroi)
    xpHeroi = xpHeroi + 1000
}