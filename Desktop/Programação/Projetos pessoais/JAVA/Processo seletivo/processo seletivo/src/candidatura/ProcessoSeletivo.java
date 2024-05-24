package candidatura;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
  public static void main(String[] args) {
    String [] candidatos = {"Phillipe", "Marcos", "Luiz", "Fernando", "Pedro"};  
    for(String candidato: candidatos){
      entrandoEmContato(candidato);
    }
  }

static void entrandoEmContato(String candidato){
    int tentativasRealizadas = 1;
		boolean continuarTentando = true;
		boolean atendeu=false;
		do {
			atendeu= atender();
			continuarTentando = !atendeu;
			if(continuarTentando)
				tentativasRealizadas++;
			else
				System.out.println("CONTATO REALIZADO COM SUCESSO");
			
		}while(continuarTentando && tentativasRealizadas<3);
		
		if(atendeu)
			System.out.println("CONSEGUIMOS CONTATO COM " + candidato +" NA " + tentativasRealizadas + " TENTATIVA");
		else
			System.out.println("NÃO CONSEGUIMOS CONTATO COM " + candidato +", NÚMERO MAXIMO TENTATIVAS " + tentativasRealizadas + " REALIZADA");
		
}

// Criando o metodo atender   
  static boolean atender() {
    return new Random().nextInt(3)==1;
  }

// função criada para pegar os candidatos e imprimir todos eles.
  static void imprimirSelecionados(){
    String [] candidatos = {"Phillipe", "Marcos", "Luiz", "Fernando", "Pedro", "Arthur", "Gabriel", "João", "Diniz", "Cardoso"};
    
    System.out.println("Imprimindo a lista de candidatos informando o indece do elemento");
    for(int indice = 0; indice <= candidatos.length; indice++){
      System.out.println("O candidato de numero " + (indice+1) + " é " + candidatos[indice]);
    }

    System.out.println("Forma abreviada de interação for each");

    for(String candidato: candidatos){
      System.out.println("O candidato selecionado foi " + candidato);
    }

  }

// Função para seleção de candidato 
  static void selecaoCandidato(){
    String [] candidatos = {"Phillipe", "Marcos", "Luiz", "Fernando", "Pedro", "Arthur", "Gabriel", "João", "Diniz", "Cardoso"} ;
    int candidatosSelecionados = 0;
    int candidatoAtual = 0;
    double salarioBase = 2000.0;
    while(candidatosSelecionados < 5){
      String candidato = candidatos[candidatoAtual];
      double salarioPretendido = valorPretendido();

      System.out.println("O candidato " + candidato + " Solicitou este valor de salário " + salarioPretendido);
      if(salarioBase >= salarioPretendido && candidatoAtual < candidatos.length){
        System.out.println("O candidato " + candidato + " foi selecionado para a vaga");
        candidatosSelecionados++;
      }else{
        System.out.println("O candidato não foi selecionado.");
      }
      candidatoAtual++;
    }
  }

//Pegar valores aleatorios entre 1800, 2200

  static double valorPretendido() {
    return ThreadLocalRandom.current().nextDouble(1800, 2200);
  }

//Função criada para pegar o salario e analisar se ele é apto ou não.
  static void analisarCandidato(double salarioPretendido){
    double salarioBase = 2000.0;
    if(salarioBase > salarioPretendido){
      System.out.println("LIGAR PARA O CONDIDATO");
    }else if(salarioBase == salarioPretendido){
      System.out.println("AGUARDANDO O RESULTADO DOS DEMAIS CANDIDATOS");
    }else{
      System.out.println("LIGAR PARA O CANDIDATO COM CONTRA PROPOSTA");
    }
  }

  
}
