const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const regex = /(<([^>]+)>)/ig;

if (localStorage.getItem('lista')) {
  listaTarefas.innerHTML = localStorage.getItem('lista');
}

criarTarefa.addEventListener('click', () => {
  if (textoTarefa.value === '') {
    return alert('Insira uma tarefa');
  }

  const liTarefa = listaTarefas.appendChild(document.createElement('li'));
  let valor = textoTarefa.value;

  valor = valor.replace(regex, '');

  liTarefa.innerHTML = valor;
  textoTarefa.value = '';
});

listaTarefas.addEventListener('click', (e) => {
  if (e.target.id !== 'lista-tarefas') {
    document.querySelectorAll('li').forEach((elem) => {
      const ItensNSelecionados = elem;
      ItensNSelecionados.style.backgroundColor = '';
    });

    document.querySelectorAll('.selected').forEach((elem) => {
      const ItensNSelecionados = elem;
      ItensNSelecionados.classList.remove('selected');
    });

    e.target.classList.add('selected');
  }
});

listaTarefas.addEventListener('dblclick', (e) => {
  if (e.target.id !== 'lista-tarefas') {
    if (e.target.classList[1]) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  document.querySelectorAll('li').forEach((elem) => {
    const item = elem;
    item.remove();
  });
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((elem) => {
    const itemFinalizado = elem;
    itemFinalizado.remove();
  });
});

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('lista', listaTarefas.innerHTML);
});

function mudaItem(i, dir, childN) {
  const item = childN[i];
  const itemCima = childN[i - 1];
  const itemBaixo = childN[i + 1];

  if (dir === 'cima') {
    if (i - 1 === 0 || typeof item === 'undefined') return undefined;
    [item.innerHTML, itemCima.innerHTML] = [itemCima.innerHTML, item.innerHTML];
    [item.className, itemCima.className] = [itemCima.className, item.className];
    return undefined;
  }

  if (typeof itemBaixo === 'undefined') return false;
  [item.innerHTML, itemBaixo.innerHTML] = [itemBaixo.innerHTML, item.innerHTML];
  [item.className, itemBaixo.className] = [itemBaixo.className, item.className];
}

function moveElemento(dir) {
  let i = 1;
  const childN = listaTarefas.childNodes;
  const arrFil = Object.values(childN).filter((e) => e.nodeName !== '#text');
  if (arrFil.length === 0) return false;

  arrFil.every((e) => {
    if (!e.classList.contains('selected')) {
      i += 1;
      return true;
    }
    return false;
  });

  mudaItem(i, dir, childN);
}

document.querySelector('#mover-cima').addEventListener('click', () => moveElemento('cima'));

document.querySelector('#mover-baixo').addEventListener('click', () => moveElemento('baixo'));

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  document.querySelector('.selected').remove();
});
