export interface Rodada {
    numero: number;
    partidas: Partida[];
}

export interface Partida {
    visitante: string,
    placar_visitante: number,
    mandante: string,
    placar_mandante: number,
    resultado: string,
    estadio: string,
    data_partida: Date,
    hora_partida: Date,
    pontuacao_geral_mandante: {
      gols_fora_casa: number,
      empates_fora_casa: number,
      total_jogos: number,
      gols_casa: number,
      jogos_fora_casa: number,
      vitorias_casa: number,
      derrotas_casa: number,
      total_pontos: number,
      empates_casa: number,
      pontos_fora_casa: number,
      total_gols_sofridos: number,
      total_vitorias: number,
      vitorias_fora_casa: number,
      total_derrotas: number,
      pontos_casa: number,
      derrotas_fora_casa: number,
      total_gols_marcados: number,
      jogos_casa: number,
      total_empates: number
    },
    pontuacao_geral_visitante: {
      gols_fora_casa: number,
      empates_fora_casa: number,
      total_jogos: number,
      gols_casa: number,
      jogos_fora_casa: number,
      vitorias_casa: number,
      derrotas_casa: number,
      total_pontos: number,
      empates_casa: number,
      pontos_fora_casa: number,
      total_gols_sofridos: number,
      total_vitorias: number,
      vitorias_fora_casa: number,
      total_derrotas: number,
      pontos_casa: number,
      derrotas_fora_casa: number,
      total_gols_marcados: number,
      jogos_casa: number,
      total_empates: number
    }
}