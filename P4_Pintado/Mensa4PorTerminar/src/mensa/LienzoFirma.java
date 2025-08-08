/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mensa;

import java.awt.Color;
import java.awt.Graphics;
import java.util.LinkedList;
import java.awt.Point;
import java.util.Iterator;

/**
 *
 * @author quevedo
 */
public class LienzoFirma extends javax.swing.JPanel{
    LienzoFirma(){
        super();
        puntos=new LinkedList<>();
        trazoRadio=4;
        trazoColor=Color.BLACK;
    }
    
    @Override
    public void paint(Graphics g){
        super.paint(g);
        // Color de pintado trazoColor
        Iterator<Point> i=puntos.iterator();
        while(i.hasNext()){
            Point p=i.next();
            int x=p.x;
            int y=p.y;
            // Pinta un círculo centrado en (x,y) y de radio trazoRadio
        }
            
    }
    
    public void insertaPunto(Point p){
           puntos.add(p);
    }
    
    public void setTrazoRadio(int trazoRadio){
        if(trazoRadio>=0)
            this.trazoRadio=trazoRadio;
    }
    
    public int getTrazoRadio(){
        return trazoRadio;
    }
    
    public void setTrazoColor(Color trazoColor){
        if(trazoColor!=null)
            this.trazoColor=trazoColor;
    }
    
    public Color getTrazoColor(){
        return trazoColor;
    }
    
    public void borra(){
        puntos.clear();
    }
    
    private int trazoRadio; // Grosor del trazo
    private Color trazoColor; // Color con el que se pintará el trazo
    private LinkedList<Point> puntos; // Puntos que forman el trazo
}
