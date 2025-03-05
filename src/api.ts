import axios from "axios";

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

export async function getExchangeRate(from: string, to: string): Promise<number> {
  try {
    const response = await axios.get(`${API_URL}${from}`);
    return response.data.rates[to];
  } catch (error) {
    console.error("Erro ao buscar taxa de câmbio:", error);
    return 0;
  }
}
