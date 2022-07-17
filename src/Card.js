import React, { useState } from 'react';
import Movies from './Movies';
import Footers from './Footers';
import Developer from './Developer';
import { Modal, show, Button } from 'react-bootstrap';

export default function Card(page) {
  return (
    <div>
      <Movies />
    </div>
  );
}
