import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'antd';
import { COMPANY_NAME } from 'common/constants';
import Form from './UserForm';
import Header from './ModalHeader';

interface Props {
  visible: boolean;
  onCancel: () => void;
}

const InviteModal: React.FC<Props> = ({ visible, onCancel }) => {
  const [successful, setSuccessful] = useState(false);

  const onClose = useCallback(() => {
    onCancel();
    setSuccessful(false);
  }, [onCancel]);

  return (
    <Modal
      width={320}
      visible={visible}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      centered
    >
      {successful ? (
        <>
          <Header title="All Done!" />
          <div className="text-sm md:text-base text-center my-10">
            You will be one of the first to experience
            <br />
            {COMPANY_NAME} when we launch.
          </div>
          <div>
            <Button type="primary" block onClick={onClose}>
              OK
            </Button>
          </div>
        </>
      ) : (
        <>
          <Header title="Request an invite" />
          <Form
            onSuccess={() => {
              setSuccessful(true);
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default InviteModal;
