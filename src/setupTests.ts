import '@testing-library/jest-dom/extend-expect';
import Enzyme, { EnzymeAdapter } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });
