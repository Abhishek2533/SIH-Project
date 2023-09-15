import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const InvoiceScreen = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoice data from your API or data source
    fetch('https://example.com/api/invoices')
      .then((response) => response.json())
      .then((data) => setInvoices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Invoice Details</Text>
      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Invoice Number: {item.invoiceNumber}</Text>
            <Text>Amount: ${item.amount}</Text>
            {/* Display other invoice details */}
          </View>
        )}
      />
    </View>
  );
};

export default InvoiceScreen;