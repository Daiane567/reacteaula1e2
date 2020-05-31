import React, { component } from "react";


const tableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody= () => {
  return(       
   <tbody>
      <tr>
        <td>Paulo</td>
        <td>React</td>
        <td>1000</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Nico</td>
        <td>React</td>
        <td>1000</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Daniel</td>
        <td>React</td>
        <td>1000</td>
        <td><button>Remover</button></td>
      </tr>
  </tbody>
););
}

class Tabela extends component {
  render() {
    return (
      <table>
        <TableHead/>
        <TableBody/>
      </table>
    );
  }

}
export default Tabela;
