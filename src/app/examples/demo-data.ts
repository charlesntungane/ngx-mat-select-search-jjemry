export interface Bank {
  id: string;
  name: string;
}

export interface BankGroup {
  name: string;
  banks: Bank[];
}

/** list of banks */
export const BANKS: Bank[] = [
  { name: 'Demographic and account details', id: 'A' },
  { name: 'Balance ', id: 'B' },
  { name: 'Transaction', id: 'C' },
  /* { name: 'Bank D (France)', id: 'D' },
  { name: 'Bank E (France)', id: 'E' },
  { name: 'Bank F (Italy)', id: 'F' },
  { name: 'Bank G (Italy)', id: 'G' },
  { name: 'Bank H (Italy)', id: 'H' },
  { name: 'Bank I (Italy)', id: 'I' },
  { name: 'Bank J (Italy)', id: 'J' },
  { name: 'Bank Kolombia (United States of America)', id: 'K' },
  { name: 'Bank L (Germany)', id: 'L' },
  { name: 'Bank M (Germany)', id: 'M' },
  { name: 'Bank N (Germany)', id: 'N' },
  { name: 'Bank O (Germany)', id: 'O' },
  { name: 'Bank P (Germany)', id: 'P' },
  { name: 'Bank Q (Germany)', id: 'Q' },
  { name: 'Bank R (Germany)', id: 'R' },*/
];

/** list of bank groups */
export const BANKGROUPS: BankGroup[] = [
  {
    name: 'Employee Demographics',
    banks: [
      { name: 'Participate Name', id: 'A' },
      { name: 'Social Security Number', id: 'B' },
      { name: 'Employee Id', id: 'C' },
      { name: 'Age', id: 'D' },
      { name: 'Birth Date', id: 'E' },
    ],
  },
  {
    name: 'Employee Type',
    banks: [
      { name: 'All', id: 'C' },
      { name: 'Key Employee', id: 'D' },
      { name: 'Highly compensated Employee', id: 'E' },
    ],
  },
];
