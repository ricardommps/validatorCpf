import _ from 'lodash';
import imask from 'imask';
import contentCpf from "cpf_cnpj";
import contentCnpjfrom from "cpf_cnpj";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

// COMMONS
export const obrigatorio = (value, all, props) => {
  if (value === undefined) {
    return 'Required';
  }

  if (typeof value === 'object' && _.isEmpty(value)) {
    return 'Required';
  }


  if (typeof value !== 'object' && isEmpty(value)) {
    return 'Required';
  }

  return undefined;
};


// CPF
const CPF_MASK = imask.createMask({ mask: '000.000.000-00' });

export const formatCpf = (value, all, props) => {
  if (value === '000.000.000-00') {
    return value;
  }
  return CPF_MASK.resolve(value);
};

export const validateCpf = (value, all, props) => {
  if (value === '000.000.000-00') {
    return undefined;
  }

  if (contentCpf.CPF.isValid(value)) {
    return undefined;
  }

  return 'CPF invalid';
};


//PHONE
const PHONE_MASK = imask.createMask({ mask: '(00) 00000-0000' });
export const formatPhone = (value, all, props) => {
  if (value === '(00) 00000-0000') {
    return value;
  }

  return PHONE_MASK.resolve(value);
};


// CNJP
const CNJP_MASK = imask.createMask({ mask: '00.000.000/0000-00' });

export const formatCnpj = (value, all, props) => {
  if (value === '00.000.000/0000-00') {
    return value;
  }

  return CNJP_MASK.resolve(value);
};

export const validateCnpj = (value, all, props) => {

  if (value === '00.000.000/0000-00') {
    return undefined;
  }

  if (contentCnpjfrom.CNPJ.isValid(value)) {
    return undefined;
  }

  return 'CNPJ invalid';
};

export const formatCpfCnpj = (value, all, props) => {
  if (value.length < 15) {
    //CPF 
    if (value === '000.000.000-00') {
      return value;
    }
    return CPF_MASK.resolve(value);
  } else {
    //CNPJ
    if (value === '00.000.000/0000-00') {
      return value;
    }

    return CNJP_MASK.resolve(value);
  }
};


export const validateCpfCnpj = (value, all, props) => {
  if (value.length < 15) {
    //CPF 
    if (value === '000.000.000-00') {
      return undefined;
    }
  
    if (contentCpf.CPF.isValid(value)) {
      return undefined;
    }
  
    return 'CPF invalid';
  } else {
    //CNPJ
    if (value === '00.000.000/0000-00') {
      return undefined;
    }
  
    if (contentCnpjfrom.CNPJ.isValid(value)) {
      return undefined;
    }
  
    return 'CNPJ invalid';
  }

}

// EMAIL
export const validateEmail = (value, all, props) => {
  if (isEmail(value)) {
    return undefined;
  }

  return 'Email invalid';
};
