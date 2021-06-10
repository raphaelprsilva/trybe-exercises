/*------------------------------------------------------------------------------
  CICLO DE VIDA DE COMPONENTES
------------------------------------------------------------------------------*/

/*  - Todo Componente React, tem por padrão, um LifeCycle, ou seja, um Ciclo de
      vida;
    - As FASES do 'Lifecycle' tem associdadas a si, funções, as quais é possível,
      associar, COMPORTAMENTOS;
*/

/*  FASES DA VIDA DE UM COMPONENTE REACT
    ---------------------------------------------------------------------------
    - FASE 1 -> Inicialização -> Quando o COMPONENT recebe as PROPS e STATES
    - FASE 2 -> Montagem -> Quando o COMPONENT está sendo colocado na tela pela
        primeira vez;
    - FASE 3 -> Atualização -> Tudo o que acontece no meio de campo, ou seja,
        quando se muda o state, clica em um botão;
    - FASE 4 -> Desmontagem -> Quando o COMPONENT está saindo da tela;
*/

/*  FUNÇÕES EXECUTAS AO FINAL DE CADA FASE DO CICLO DE VIDA
    ---------------------------------------------------------------------------
    - Inicialização -> 
    - Montagem -> componentDidMount() -> ideal para REQUISIÇÕES
    - Atualização -> componentShouldUpdate() -> componentDidUpdate()
    - Desmontagem -> componentWillUnmount
*/
