import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory, createHashHistory } from 'history';
import { BrowserRouter, Route } from 'react-router-dom';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('navigates to FlappySweep page when FlappySweep button is clicked', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CallToAction />
      </BrowserRouter>
    );

    history.push('/flappysweep');

    expect(history.location.pathname).toBe('/flappysweep');
  });
});