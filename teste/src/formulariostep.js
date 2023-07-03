import React, { useState } from 'react';

const Step1 = ({ data, setData, goToNextStep }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateStep = () => {
    if (name.trim() === '') {
      alert('Por favor, preencha o campo Nome');
      return;
    }
    if (email.trim() === '') {
      alert('Por favor, preencha o campo Email');
      return;
    }

    setData({ ...data, name, email });
    goToNextStep();
  };

  return (
    <div>
      <h2>Passo 1</h2>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nome" />
      <br />
      <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />
      <br />
      <button onClick={validateStep}>Próximo</button>
    </div>
  );
};

const Step2 = ({ data, setData, goToNextStep, goToPreviousStep }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateStep = () => {
    if (address.trim() === '') {
      alert('Por favor, preencha o campo Endereço');
      return;
    }
    if (phone.trim() === '') {
      alert('Por favor, preencha o campo Telefone');
      return;
    }

    setData({ ...data, address, phone });
    goToNextStep();
  };

  return (
    <div>
      <h2>Passo 2</h2>
      <input type="text" value={address} onChange={handleAddressChange} placeholder="Endereço" />
      <br />
      <input type="text" value={phone} onChange={handlePhoneChange} placeholder="Telefone" />
      <br />
      <button onClick={goToPreviousStep}>Voltar</button>
      <button onClick={validateStep}>Próximo</button>
    </div>
  );
};

const Step3 = ({ data, goToPreviousStep, resetForm }) => {
  return (
    <div>
      <h2>Passo 3</h2>
      <p>Confirmação:</p>
      <p>Nome: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Endereço: {data.address}</p>
      <p>Telefone: {data.phone}</p>
      <br />
      <button onClick={goToPreviousStep}>Voltar</button>
      <button onClick={resetForm}>Reiniciar</button>
    </div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({

  });

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setCurrentStep(1);
 
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={formData} setData={setFormData} goToNextStep={goToNextStep} />;
      case 2:
        return (
          <Step2
            data={formData}
            setData={setFormData}
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      case 3:
        return <Step3 data={formData} goToPreviousStep={goToPreviousStep} resetForm={resetForm} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>MultiStep Form</h1>
      {renderCurrentStep()}
    </div>
  );
};

export default MultiStepForm;