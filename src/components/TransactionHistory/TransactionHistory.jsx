import { Table, Thead, TheadTh, TbodyTr, TbodyTh } from './TransactionHistory.styled'
import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) => {
    return (
        <Table >
  <Thead>
    <tr>
      <TheadTh>Type</TheadTh>
      <TheadTh>Amount</TheadTh>
      <TheadTh>Currency</TheadTh>
    </tr>
  </Thead>

    <tbody>
                
          {items.map(({id,type,amount,currency} ) => 
                  <TbodyTr key={id}>
                  <TbodyTh>{ type }</TbodyTh>
                  <TbodyTh>{ amount}</TbodyTh>
                  <TbodyTh>{ currency }</TbodyTh>
                </TbodyTr>
             )}


   
  </tbody>
</Table>
    )
    
}


TransactionHistory.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,

}
