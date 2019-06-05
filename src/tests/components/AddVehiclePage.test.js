import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddVehiclePage } from '../../components/AddVehiclePage';
import vehicles from '../fixtures/vehicles';

configure({adapter: new Adapter()});

let startAddVehicle, history, wrapper;

beforeEach(() => {
  startAddVehicle = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddVehiclePage startAddVehicle={startAddVehicle} history={history} />);
});

test('should render AddVehiclePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('VehicleForm').prop('onSubmit')(vehicles[1]);
  expect(history.push).toHaveBeenLastCalledWith('/admin');
  expect(startAddVehicle).toHaveBeenLastCalledWith(vehicles[1]);
});
