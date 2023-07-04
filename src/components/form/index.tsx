import React from 'react';

type Props = {
  id?: string;
};

export const Form = ({ id }: Props) => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="maidenName">Maiden Name</label>
        <input type="text" id="maidenName" name="maidenName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />

        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" />

        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" name="companyName" />
      </form>
    </div>
  );
};
