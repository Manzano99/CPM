/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mensa;

import java.awt.Graphics;

/**
 *
 * @author quevedo
 */
public class PanelGrosor extends javax.swing.JPanel{
    
    PanelGrosor(){
        this.radio=1;
    }
    
    @Override
    public void paint(Graphics g){
        super.paint(g);
        int centroX=this.getWidth()/2;
        int centroY=this.getHeight()/2;
        g.fillOval(centroX-radio,centroY-radio,radio*2,radio*2);
    }
    
    public void setRadio(int radio){
        this.radio=radio;
    }
    
    private int radio;
}
