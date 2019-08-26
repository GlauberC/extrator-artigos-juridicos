import pickle
import minisom
import pandas as pd
import numpy as np
from flask import Flask
from flask import request
from flask import jsonify
from flask import Response
from flask_cors import CORS 


df_avalia = pd.read_csv('df_avalia.csv', index_col=0 )
dataset = pd.read_csv('palavras-selecionadas.csv', index_col=0 )

with open('model_minisom', 'rb') as f:
    som = pickle.load(f)


def vetorizar_palavras(lista_palavras):
    array = 60 * [0]
    for palavra in lista_palavras:
        if palavra in list(dataset.columns):
            posicao = list(dataset.columns).index(palavra)
            array[posicao] += 1
    return array

def encontra_mesma_posicao(df_avalia, findX, findY):
    array_mesma_posicao = list()
    for i in range(len(df_avalia.values)):
        if df_avalia.values[i][0] == findX and df_avalia.values[i][1] == findY:
            array_mesma_posicao.append(i)
    return array_mesma_posicao

def conta_artigo(df_avalia, findX, findY):
    lista_artigos = list()
    conta_artigos = {}
    for i in encontra_mesma_posicao(df_avalia, findX, findY):
        # transformar string em lista     
        art_string = df_avalia.iloc[i][-1]
        art_string = art_string.replace('[', '').replace(']', '').replace("'", '')
        art_list = art_string.split(',')

        for art in art_list:
            art = art.strip()
            if art not in lista_artigos:
                lista_artigos.append(art)
                conta_artigos[art] = 1
            else:
                conta_artigos[art] += 1
    return conta_artigos




app = Flask(__name__)

CORS(app)
cors = CORS(app, resources={r"/artigos/*": {"origins": "*"}})

@app.route('/artigos', methods=['POST'])
def index():
    palavras = request.json['palavras']
    print(palavras)
    array = vetorizar_palavras(palavras)
    posicao = som.winner(array)
    print("pX: {}".format(posicao[0]))
    print("pY: {}".format(posicao[1]))
    
    artigos = conta_artigo(df_avalia, posicao[0], posicao[1])

    # return jsonify(dictionary)
    return jsonify(artigos)
app.run()

