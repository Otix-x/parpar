import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

import { formatCurrency } from '../../utilities/formatCurrency';

import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../components/Container';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/Button';

const server_url = 'http://localhost:5000';

const socket = io.connect('http://localhost:5000');

const Admin = () => {
  const paddingY = 'py-3';

  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    axios.get(`${server_url}/api/order/pending`).then((res) => {
      setPendingOrders(res.data);
    });
  }, []);

  useEffect(() => {
    socket.on('update-pending', (data) => {
      axios.get(`${server_url}/api/order/pending`).then((res) => {
        setPendingOrders(res.data);
      });
    });
  }, []);

  function handleConfirm(orderID) {
    axios.post(`${server_url}/api/order/confirm`, {
      paymentMethod: 'online',
      employeeID: 1,
      orderID: orderID,
    });
  }

  function handleCancel(orderID) {
    axios.post(`${server_url}/api/order/cancel`, {
      employeeID: 1,
      orderID: orderID,
    });
  }

  return (
    <MainLayout>
      <Container as='section' className='pb-20 mt-20'>
        <div className='flex items-center gap-10'>
          <div>
            <span className='font-bold'>Total:</span> 20
          </div>
          <div>
            <span className='font-bold'>Sold:</span> 1k
          </div>
        </div>

        <table className='w-full rounded-lg mt-6 bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 text-left pl-4'>Order ID</th>
              <th className='py-2 px-4'>Customer Phone</th>
              <th className='py-2 px-4'>Total</th>
              <th className='py-2 px-4'>Employee ID</th>
              <th className='py-2 pr-2 whitespace-nowrap'>Created At</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {pendingOrders.map((order) => (
              <tr key={order.orderID} className='border-t border-gray-200'>
                <td className={`pl-4 pr-3 ${paddingY}`}>
                  <p className='line-clamp-2'>{order.orderID}</p>
                </td>
                <td className={`px-2 ${paddingY}`}>
                  <p className='whitespace-nowrap text-center'>
                    {order.customer.phone}
                  </p>
                </td>
                <td className={`px-2 ${paddingY}`}>
                  <p className='whitespace-nowrap text-center'>
                    {formatCurrency(order.orderTotal)}
                  </p>
                </td>
                <td className={`px-2 ${paddingY}`}>
                  <p className='whitespace-nowrap text-center'>20</p>
                </td>
                <td className={`px-2 ${paddingY}`}>
                  <p className='whitespace-nowrap text-center'>
                    {order.orderDate}
                  </p>
                </td>
                <td className={paddingY}>
                  <Button
                    onClick={() => {
                      handleConfirm(order.orderID);
                    }}
                    className='bg-[#42cf99] text-lg px-2 text-white cursor-pointer hover:text-green-700'>
                    Confirm
                  </Button>
                </td>
                <td className={paddingY}>
                  <Button
                    onClick={() => {
                      handleCancel(order.orderID);
                    }}
                    className='bg-[#e67a84] text-lg px-2 text-white cursor-pointer hover:text-red-700'>
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </MainLayout>
  );
};

export default Admin;
