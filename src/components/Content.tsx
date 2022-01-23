import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from './InviteModal';

interface Props {}

const Content: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="text-center">
        <strong className="text-3xl md:text-5xl">
          A better way
          <br />
          to enjoy every day.
        </strong>
      </div>
      <div className="mt-5 text-sm md:text-base">
        Be the first to know when we launch.
      </div>
      <div className="mt-5">
        <Button type="primary" size="large" onClick={() => setVisible(true)}>
          Request an invite
        </Button>
      </div>
      <Modal visible={visible} onCancel={() => setVisible(false)} />
    </section>
  );
};

export default Content;
