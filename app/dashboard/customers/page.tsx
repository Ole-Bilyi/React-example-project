import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';
export const metadata: Metadata = {
  title: 'Customers',
};
const customers = await fetchFilteredCustomers("");
export default function Page() {
    return (
      <div className="w-full">
              <Table customers={customers}/>
          </div>
    );
  }