/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pintado;

import java.awt.Graphics;

/**
 *
 * @author uo266600
 */
public class PaintPanel extends javax.swing.JPanel{
    public PaintPanel(){
        px=0;
        py=0;
        ppx=0;
        ppy=0;
        dx=10;
        dy=5;
        cadena="";
    }
    
    private int dx, dy;
    private int px, py, ppx, ppy;
    private int rep=0;
    private String cadena;
    
    @Override
    public void paint (Graphics g){
        super.paint(g);
        System.out.println("PaintPanel.paint: "+(++rep));
        g.drawLine(ppx, ppy, px, py);      
        for (int i=0; i<cadena.length(); i++){
            g.drawString(""+cadena.charAt(i), 150+dx*i, 10+dy*i);
        }
    }
    
    public void setP(int px, int py){
        ppx=this.px;
        ppy=this.py;
        this.px=px;
        this.py=py;
    }
    public void setT(String cadena){
        this.cadena=cadena;
    }
    
}
